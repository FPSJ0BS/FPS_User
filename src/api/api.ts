import axios from "axios";

const BASE_URL = "https://admin.fpsjob.com/api"

export const getTrackingData = async (applyID) => {
    console.log('axios id', applyID);
    try {
      const response = await axios.get(`${BASE_URL}/v2/appliedJobsStatus?applyID=${applyID}`);
      return response;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };