import customAPI from "../apis/customAPI";

//User

export const getCurrentUser = async () => {
  const { data } = await customAPI.get("/user/info");
  console.log("유저 정보 :", data);
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
}) => {
  const userInfoDTO = {
    id: id,
    email: email,
    name: name,
    description: description,
    githubUrl: githubUrl,
    blogUrl: blogUrl,
    snsUrl: snsUrl,
  };
  const formData = new FormData();
  console.log(img);
  if (img !== null) {
    for (let i = 0; i < img.length; i++) {
      formData.append("photo", img[0]);
    }
  }
  formData.append(
    "userInfoDTO",
    new Blob([JSON.stringify(userInfoDTO)], { type: "application/json" })
  );
  await customAPI
    .patch("/user/info", formData)
    .then((response) => {
      console.log("성공", response);
      return response;
    })
    .catch((error) => {
      console.log("실패", error.response.data);
      return error;
    });
};

export const postDuplicateCheck = async ({ name }) => {
  const { data } = await customAPI.post("/user/validate", { name: name });
  console.log("중복검사 :", data);
  return data;
};

export const getProfile = async () => {
  const { data } = await customAPI.get("/user/profile");
  console.log("유저 정보 :", data);
  return data;
};

export const getUserBoard = async ({ id }) => {
  const { data } = await customAPI.patch(`/user/board/${id}`);
  console.log("유저 보드:", data);
  return data;
};

//TIL

export const getTILs = async ({ page }) => {
  const { data } = await customAPI.get(`tils/?size=10&page=0`);
  console.log("TIL 목록 불러오기", data);
  return data;
};

export const getTILCurrent = async () => {
  const { data } = await customAPI.get(`tils/current`);
  console.log("TIL 현황", data);
  return data;
};

export const postTILs = async ({
  userId,
  subject,
  description,
  startDate,
  endDate,
  cycleStatus,
  cycleCnt,
}) => {
  await customAPI
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
      console.log("성공", response);
      return response;
    })
    .catch(function (error) {
      // 에러 핸들링
      console.log("실패", error);
    });
};

export const getTIL = async (id) => {
  console.log(`/til/${id}`);
  const { data } = await customAPI.get(`/tils/${id}`);
  console.log("TIL 상세:", data);
  return data;
};

export const patchTIL = async ({ id }) => {
  const { data } = await customAPI.patch(`/tils/${id}`);
  console.log("TIL 수정:", data);
  return data;
};

export const getTILCrts = async ({ page }) => {
  const { data } = await customAPI.get(
    `/til-crts/?page=0&size=10&sort=id%2CDESC`
  );
  console.log("TIL 인증 목록 :", data);
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
  console.log(tilCrtDTO);
  const formData = new FormData();
  formData.append(
    "tilCrtDTO",
    new Blob([JSON.stringify(tilCrtDTO)], { type: "application/json" })
  );
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  await customAPI
    .post(`/til-crts`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log("성공", response);
      return response;
    })
    .catch((error) => {
      console.log("실패", error.response.data);
      return error;
    });
};

export const getTILCrt = async ({ id }) => {
  const { data } = await customAPI.get(`/tils-crts/${id}`);
  console.log("TIL 인증 상세:", data);
  return data;
};

export const patchTILCrt = async ({ id }) => {
  const { data } = await customAPI.patch(`/tils/${id}`);
  console.log("IL 인증 수정:", data);
  return data;
};
