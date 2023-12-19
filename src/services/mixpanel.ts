import mixpanel from 'mixpanel-browser';

import { personalPage } from '@/types/mixpanel';

export class MixpanelLogging {
  private static _instance: MixpanelLogging;

  public static getInstance(): MixpanelLogging {
    if (MixpanelLogging._instance == null) {
      return (MixpanelLogging._instance = new MixpanelLogging());
    }
    return this._instance;
  }

  public constructor() {
    if (MixpanelLogging._instance) {
      throw new Error('Error: already instance ');
    }
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || '', {
      persistence: 'localStorage',
    });
  }

  protected track(eventName: string, properties: object) {
    mixpanel.track(eventName, properties);
  }

  public event(eventName: string, properties: object) {
    this.track(eventName, properties);
  }
}

export function logging(eventName: string, currentPage: string): void;
export function logging(
  eventName: string,
  currentPage: string,
  loggingProp: personalPage | undefined,
): void;

export function logging(
  eventName: string,
  currentPage: string,
  loggingProp?: personalPage | undefined,
) {
  if (arguments.length === 2) {
    MixpanelLogging.getInstance().event(
      eventName,
      setProperties({ current: currentPage }),
    );
  }

  if (arguments.length === 3) {
    MixpanelLogging.getInstance().event(
      eventName,
      setProperties({ ...loggingProp, current: currentPage }),
    );
  }
}

export const setProperties = (data: object): object => {
  if (!document) return {};

  return {
    entry: document.referrer,
    ...data,
  };
};
