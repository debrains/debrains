import customAPI from "../apis/customAPI";

//User

export const getCurrentUser = async () => {
  const { data } = await customAPI.get("/user/info");
  return data;
};

export const patchUser = async ({
  id,
  email,
  name,
  description,
  img,
  githubUrl,
  blogUrl,
  snsUrl,
  consent,
}) => {
  const userInfoDTO = {
    id: id,
    email: email,
    name: name,
    description: description,
    githubUrl: githubUrl,
    blogUrl: blogUrl,
    snsUrl: snsUrl,
    consent: consent,
  };
  const formData = new FormData();
  if (img !== null) {
    for (let i = 0; i < img.length; i++) {
      formData.append("photo", img[0]);
    }
  }
  formData.append(
    "userInfoDTO",
    new Blob([JSON.stringify(userInfoDTO)], { type: "application/json" })
  );
  const result = await customAPI
    .patch("/user/info", formData)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response.data;
    });
  console.log("패치유저:", result);
  return result;
};

export const postDuplicateCheck = async ({ name }) => {
  const { data } = await customAPI.post("/user/validate", { name: name });
  return data;
};

export const getProfile = async () => {
  const { data } = await customAPI.get("/user/profile");
  return data;
};

export const getUserBoard = async ({ id }) => {
  const { data } = await customAPI.patch(`/user/board/${id}`);
  return data;
};

//TIL

export const getTILs = async ({ page }) => {
  const { data } = await customAPI.get(`tils/?size=2000&page=0`);
  return data;
};

export const getTILCurrent = async () => {
  const { data } = await customAPI.get(`tils/current`);
  return data;
};

export const postTILs = async ({
  subject,
  description,
  startDate,
  endDate,
  cycleStatus,
  cycleCnt,
}) => {
  const result = await customAPI
    .post(`/tils/`, {
      subject: subject,
      description: description,
      startDate: startDate,
      endDate: endDate,
      cycleStatus: cycleStatus,
      cycleCnt: cycleCnt,
    })
    .then(function (response) {
      // 성공 핸들링
      return response;
    })
    .catch(function (error) {
      // 에러 핸들링
      return error.response.data;
    });
  return result;
};

export const getTIL = async (id) => {
  const { data } = await customAPI.get(`/tils/${id}`);
  return data;
};

export const patchTIL = async ({ id, subject, description, userId }) => {
  const result = await customAPI
    .patch(`/tils/${id}`, {
      subject: subject,
      description: description,
      userId: userId,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response.data;
    });
  return result;
};

export const deleteTIL = async ({ id }) => {
  await customAPI
    .delete(`/tils/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const getTILCrts = async ({ id, page = 0 }) => {
  const { data } = await customAPI.get(
    `/til-crts/?tilId=${id}&page=${page}&size=10&sort=id%2CDESC`
  );
  return data;
};

export const postTILCrts = async ({
  tilId,
  description,
  startTime1,
  endTime1,
  startTime2,
  endTime2,
  startTime3,
  endTime3,
  watchTime,
  files,
}) => {
  const changeDate = (preDate) => {
    return preDate.replace("T", " ") + ":00";
  };
  const tilCrtDTO = {
    tilId: tilId,
    description: description,
    startTime1: startTime1 === "" ? "" : changeDate(startTime1),
    endTime1: endTime1 === "" ? "" : changeDate(endTime1),
    startTime2: startTime2 === "" ? "" : changeDate(startTime2),
    endTime2: endTime2 === "" ? "" : changeDate(endTime2),
    startTime3: startTime3 === "" ? "" : changeDate(startTime3),
    endTime3: endTime3 === "" ? "" : changeDate(endTime3),
    watchTime: watchTime,
  };
  const formData = new FormData();
  formData.append(
    "tilCrtDTO",
    new Blob([JSON.stringify(tilCrtDTO)], { type: "application/json" })
  );
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  const result = await customAPI
    .post(`/til-crts`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response.data;
    });
  return result;
};

export const deleteTILCrt = async ({ crtid }) => {
  await customAPI
    .delete(`/til-crts/${crtid}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const delCrtImg = async ({ crtid, fileId }) => {
  await customAPI
    .delete(`/til-crts/${crtid}/file?fileId=${fileId}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const getTILCrt = async ({ id }) => {
  const data = await customAPI
    .get(`/til-crts/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  return data;
};

export const patchTILCrt = async ({
  crtid,
  description,
  startTime1,
  endTime1,
  startTime2,
  endTime2,
  startTime3,
  endTime3,
  files,
}) => {
  const changeDate = (preDate) => {
    if (preDate === null) {
      return preDate;
    }
    return preDate.replace("T", " ") + ":00";
  };
  const tilCrtDTO = {
    tilId: crtid,
    description: description,
    startTime1: startTime1 === "" ? "" : changeDate(startTime1),
    endTime1: endTime1 === "" ? "" : changeDate(endTime1),
    startTime2: startTime2 === "" ? "" : changeDate(startTime2),
    endTime2: endTime2 === "" ? "" : changeDate(endTime2),
    startTime3: startTime3 === "" ? "" : changeDate(startTime3),
    endTime3: endTime3 === "" ? "" : changeDate(endTime3),
  };
  const formData = new FormData();
  formData.append(
    "tilCrtDTO",
    new Blob([JSON.stringify(tilCrtDTO)], { type: "application/json" })
  );
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  const result = await customAPI
    .patch(`/til-crts/${crtid}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response.data;
    });
  return result;
};

//support

export const postSupport = async ({ feedback }) => {
  const result = await customAPI
    .post(`/support/skill`, {
      request: feedback,
    })
    .then(function (response) {
      // 성공 핸들링
      return response;
    })
    .catch(function (error) {
      // 에러 핸들링
      return error.response.data;
    });
  return result;
};
