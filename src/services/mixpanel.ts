import mixpanel from 'mixpanel-browser';

export class MixpanelTracking {
  private static _instance: MixpanelTracking;

  public static getInstance(): MixpanelTracking {
    // instance 비교문 == 으로 해야함.. === 아니라 왓?
    if (MixpanelTracking._instance == null) {
      return (MixpanelTracking._instance = new MixpanelTracking());
    }
    return this._instance;
  }

  public constructor() {
    if (MixpanelTracking._instance) {
      throw new Error('Error: already instance ');
    }
    console.log('Mixpnael Tracking in strcat');
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || '', {
      debug: true,
      track_pageview: true,
      persistence: 'localStorage',
    });
  }

  protected track(eventName: string, properties: object) {
    mixpanel.track(eventName, properties);
  }

  public pageViewEvent(eventName: string, properties: object) {
    this.track(eventName, properties);
  }

  public clickEvent(eventName: string, properties: object) {
    this.track(eventName, properties);
  }
}
