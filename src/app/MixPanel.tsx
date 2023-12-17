import mixpanel from 'mixpanel-browser';
import { useEffect } from 'react';

export default function MixPanel() {
  useEffect(() => {
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || '', {
      debug: true,
      track_pageview: true,
      persistence: 'localStorage',
    });
    // mixpanel.track('page_view');
  }, []);
  return <></>;
}
