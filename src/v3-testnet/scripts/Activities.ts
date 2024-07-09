import { gatewayInstanceV3 } from "../GatewayInstance";

export const getActivityV3 = async (activityId: string) => {
  return await gatewayInstanceV3.activity.getActivity(activityId);
};

export const getActivitiesV3 = async () => {
  return await gatewayInstanceV3.activity.getActivities();
};

export const getActivitiesCountV3 = async () => {
  return await gatewayInstanceV3.activity.getActivityCount();
};
