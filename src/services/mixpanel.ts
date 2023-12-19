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
      debug: true,
      persistence: 'localStorage',
    });
  }

  protected track(eventName: string, properties: object) {
    console.log('send message');
    mixpanel.track(eventName, properties);
  }

  public event(eventName: string, properties: object) {
    this.track(eventName, properties);
  }
}

export function logging(eventName: string): void;
export function logging(
  eventName: string,
  loggingProp: personalPage | undefined,
): void;

export function logging(
  eventName: string,
  loggingProp?: personalPage | undefined,
) {
  if (arguments.length === 1) {
    MixpanelLogging.getInstance().event(eventName, setProperties({}));
  }

  if (arguments.length === 2) {
    MixpanelLogging.getInstance().event(
      eventName,
      setProperties({ ...loggingProp }),
    );
  }
}

export const setProperties = (data: object): object => {
  if (!window || !document) return {};
  return {
    current: window.location.href,
    entry: document.referrer,
    data,
  };
};
