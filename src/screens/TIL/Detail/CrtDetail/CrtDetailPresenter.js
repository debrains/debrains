// import { nickNameAtom } from "../../../../atoms/atom";
import { useForm } from "react-hook-form";
// import { postDuplicateCheck } from "../../../../apis/api";

import { useState, useEffect } from "react";
import React from "react";
import {
  deleteTILCrt,
  getTILCrt,
  patchTILCrt,
  delCrtImg,
} from "../../../../apis/api";

import { useParams, useNavigate } from "react-router-dom";

const profile = {
  name: "새벽",
  imageUrl:
    "https://blog.kakaocdn.net/dn/YieGK/btrrAdZmjHZ/Tt5m5Z4iEsCRgGDfHLj8Dk/img.png",
  coverImageUrl:
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80",
};

let tf = true;
function MemberForm() {
  const navigate = useNavigate();
  const { id, crtid } = useParams();
  const [watchTime, setWatchTime] = useState(0);
  const { register, handleSubmit, setValue } = useForm();
  const [imgs, setImgs] = useState([]);

  const changeDate = (preDate) => {
    if (preDate == null) return null;
    return preDate.replace(" ", "T").replace(":00", "");
  };

  const onValid = async (data) => {
    const result = await patchTILCrt({
      crtid: crtid,
      description: data.description,
      startTime1: data.startTime1,
      endTime1: data.endTime1,
      startTime2: data.startTime2,
      endTime2: data.endTime2,
      startTime3: data.startTime3,
      endTime3: data.endTime3,
      files: data.files,
    });
    if (result.status === 200) {
      alert("인증 수정되었습니다.");
      navigate(`/til/${id}/${crtid}`);
    } else {
      console.log(result);
      const message = result.message;
      alert(message);
    }
  };

  const defaultValueSet = (crt) => {
    setValue(
      "startTime1",
      crt.startTime1 === "null" ? null : changeDate(crt.startTime1)
    );
    setValue(
      "startTime2",
      crt.startTime2 === "null" ? null : changeDate(crt.startTime2)
    );
    setValue(
      "startTime3",
      crt.startTime3 === "null" ? null : changeDate(crt.startTime3)
    );
    setValue(
      "endTime1",
      crt.endTime1 === "null" ? null : changeDate(crt.endTime1)
    );
    setValue(
      "endTime2",
      crt.endTime2 === "null" ? null : changeDate(crt.endTime2)
    );
    setValue(
      "endTime3",
      crt.endTime3 === "null" ? null : changeDate(crt.endTime3)
    );
    setValue(
      "description",
      crt.description === "null" ? null : crt.description
    );
  };

  const getData = async () => {
    const result = await getTILCrt({ id: crtid });
    setWatchTime(result.watchTime);
    defaultValueSet(result);
    setImgs(result.fileList);
  };

  const delCrt = async () => {
    if (window.confirm("정말 삭제합니까?")) {
      await deleteTILCrt({ crtid: crtid });
      alert("인증이 삭제되었습니다.");
      navigate(`/til/${id}`);
    }
  };
  const moveBack = () => {
    navigate(`/til/${id}`);
  };

  const delImg = async (prop) => {
    if (window.confirm("정말 삭제합니까?")) {
      await delCrtImg({ crtid: crtid, fileId: prop.target.id });
      alert("사진이 삭제되었습니다.");
      navigate(`/til/${id}/${crtid}`);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <form
        className="space-y-8 divide-y divide-gray-200"
        onSubmit={handleSubmit(onValid)}
      >
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                여기는 인증 상세 화면 입니다
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                차곡차곡 쌓이는 "나의 성장 기록"
              </p>
            </div>

            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  공부시간
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-3">
                  <div className="py-1">
                    <input
                      {...register("startTime" + 1)}
                      type="datetime-local"
                      className="  w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md "
                    />
                    <span className="p-3"> ~ </span>
                    <input
                      {...register("endTime" + 1)}
                      type="datetime-local"
                      className="  w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="py-1">
                    <input
                      {...register("startTime" + 2)}
                      type="datetime-local"
                      className="  w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md "
                    />
                    <span className="p-3"> ~ </span>
                    <input
                      {...register("endTime" + 2)}
                      type="datetime-local"
                      className="  w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="py-1">
                    <input
                      {...register("startTime" + 3)}
                      type="datetime-local"
                      className="  w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md "
                    />
                    <span className="p-3"> ~ </span>
                    <input
                      {...register("endTime" + 3)}
                      type="datetime-local"
                      autoComplete="end-time"
                      className="  w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 ">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 self-center"
                >
                  스톱워치
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-3">
                  <label
                    htmlFor="date"
                    className="block text-xl font-medium text-gray-700 "
                  >
                    {watchTime}
                  </label>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  내용
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-3">
                  <textarea
                    {...register("description")}
                    rows={3}
                    className="max-w-lg shadow-sm block w-full focus:ring-purple-500 focus:border-purple-500 sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Study 사진
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-3">
                  <div className="flex items-center">
                    <label className="block">
                      <input
                        {...register("files")}
                        accept="image/jpg,impge/png,image/jpeg,image/gif"
                        type="file"
                        multiple="multiple"
                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                      />
                    </label>
                  </div>
                  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-1 md:gap-y-1">
                    {imgs === []
                      ? null
                      : imgs.map((img) => {
                          return (
                            <div className="group relative p-7" key={img.id}>
                              <div
                                onClick={delImg}
                                className="w-50 h-50 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden hover:opacity-75"
                              >
                                <img
                                  id={img.id}
                                  src={img.path}
                                  alt="Front of men&#039;s Basic Tee in black."
                                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                />
                              </div>
                            </div>
                          );
                        })}
                    <label className="col-span-3 text-center">
                      사진을 클릭하여 삭제할 수 있습니다.
                    </label>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="flex justify-end">
            <button
              onClick={moveBack}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              뒤로가기
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              인증 수정하기
            </button>
            <button
              onClick={delCrt}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              인증 삭제하기
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

function CrtDetailPresenter(props) {
  return (
    <>
      <div className="min-h-full">
        <div className="flex flex-col min-w-0 flex-1">
          <div className="flex-1 relative z-0 flex">
            <main className="flex-1 relative z-0 xl:order-last">
              <div>
                <div>
                  <img
                    className="h-32 w-full object-cover lg:h-64"
                    src={profile.coverImageUrl}
                    alt=""
                  />
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="py-10">
          <div className="mt-8 max-w-3xl mx-auto  gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-start-2 ">
              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg border border-purple-200 ">
                  <div className="px-4 py-5 sm:px-6">
                    <MemberForm />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrtDetailPresenter;
