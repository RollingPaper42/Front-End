import { useEffect } from 'react';

import { MixpanelTracking } from '@/services/mixpanel';

export default function PageView({ pageViewName }: { pageViewName: string }) {
  useEffect(() => {
    MixpanelTracking.getInstance().pageViewEvent(pageViewName, {});
  }, []);
  return <></>;
}
