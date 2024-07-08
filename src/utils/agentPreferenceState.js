import { AGENT_PREFERENCES } from '@/src/constants/Preference';
import { USERS_DATA } from '@/src/constants/user';

export const createInitialState = () => ({
  emailData: {
    emailNotification: USERS_DATA.emailNotification,
    autoReport: USERS_DATA.autoReport,
    newsLetters: USERS_DATA.newsLetters,
    currencyUnit: USERS_DATA.currencyUnit,
    areaUnit: USERS_DATA.areaUnit,
  },

  toggleData: AGENT_PREFERENCES.updates,
});
