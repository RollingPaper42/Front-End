import mixpanel from 'mixpanel-browser';

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

export const setProperties = (data: object): object => {
  if (!window || !document) return {};
  return {
    current: window.location.href,
    entry: document.referrer,
    data,
  };
};
