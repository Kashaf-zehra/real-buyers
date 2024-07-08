import { configureStore } from '@reduxjs/toolkit';

import propertiesSlice from './slices/properties/propertiesSlice';
import propertiesCategoriesSlice from './slices/properties/propertiesCategoriesSlice';
import propertiesAmenitiesSlice from './slices/properties/propertiesAmenitiesSlice';
import usersSlice from './slices/users/usersSlice';
import termsConditionsSlice from './slices/terms/termsConditionsSlice';
import policiesSlice from './slices/policies/policiesSlice';
import featuredPropertiesSlice from './slices/properties/featuredPropertiesSlice';
import newPropertiesSlice from './slices/properties/newPropertiesSlice';
import projectsSlice from './slices/projects/projectsSlice';
import chatsSlice from './slices/chat/chatsSlice';
import blogsSlice from './slices/blogs/blogsSlice';
import partnersSlice from './slices/global/partnersSlice';
import agentsSlice from './slices/agents/agentsSlice';
import proposalsSlice from './slices/proposals/proposalsSlice';
import PakageCartSlice from './slices/settings/PakageCartSlice';
import verificationSlice from './slices/verification/verificationSlice';
import resendEmailSlice from './slices/resendEmail/resendEmailSlice';
import signinSlice from './slices/signin/signinSlice';
import authSlice from './slices/auth/authSlice';
import postlistingAdSlice from './slices/postlistingAds/postlistingAdsSlice';
import userAdsSlice from './slices/userAds/userAdsSlice';
import biddingsSlice from './slices/bidding/biddingsSlice';
import loginAgentsSlice from './slices/loginAgents/loginAgentsSlice';
import favouriteAdsSlice from './slices/favouriteAds/favouriteAdsSlice';
import userDraftSlice from './slices/userDraft/userDraftSlice';
import agentDraftSlice from './slices/agentDraft/agentDraftSlice';
import globalUnitsSlice from './slices/global/globalUnitsSlice';
import currentUserSlice from './slices/currentUser/currentUserSlice';
import searchSlice from './slices/search/searchSlice';
import packagesSlice from './slices/Packages/packagesSlice';

export const store = configureStore({
  reducer: {
    properties: propertiesSlice,
    propertyCategories: propertiesCategoriesSlice,
    featuredProperties: featuredPropertiesSlice,
    propertyAmenities: propertiesAmenitiesSlice,
    newProperties: newPropertiesSlice,
    proposals: proposalsSlice,
    biddings: biddingsSlice,

    users: usersSlice,
    terms: termsConditionsSlice,
    policies: policiesSlice,
    projects: projectsSlice,
    chats: chatsSlice,
    blogs: blogsSlice,
    partners: partnersSlice,
    PakageCart: PakageCartSlice,
    verification: verificationSlice,
    resendEmail: resendEmailSlice,
    search: searchSlice,
    signin: signinSlice,
    auth: authSlice,
    // current user
    currentUser: currentUserSlice,

    // agents for proposals
    agents: agentsSlice,

    // Sumited Ads States
    loginAgents: loginAgentsSlice,
    postListingAds: postlistingAdSlice,
    postRequestAds: userAdsSlice,

    // Draft Ads State
    userDraft: userDraftSlice,
    agentDraft: agentDraftSlice,

    // Favorite Ads State
    favoriteAds: favouriteAdsSlice,
    packages: packagesSlice,

    // global units States
    globalUnits: globalUnitsSlice,
  },
});
