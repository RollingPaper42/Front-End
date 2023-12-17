import { useEffect } from 'react';

import { MixpanelLogging, setProperties } from '@/services/mixpanel';

export default function PageView({ pageViewName }: { pageViewName: string }) {
  useEffect(() => {
    MixpanelLogging.getInstance().pageViewEvent(
      pageViewName,
      setProperties({}),
    );
  }, []);
  return <></>;
}
