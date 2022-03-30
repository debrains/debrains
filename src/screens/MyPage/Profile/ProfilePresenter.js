import { useRecoilValue, useSetRecoilState } from "recoil";
import { nickNameAtom, profileAtom } from "../../../atoms/atom";
import { useForm } from "react-hook-form";
import {
  getCurrentUser,
  patchUser,
  postDuplicateCheck,
} from "../../../apis/api";
import { useEffect, useState } from "react";

// const profile = {
//   name: "새벽",
//   imageUrl:
//     "https://blog.kakaocdn.net/dn/YieGK/btrrAdZmjHZ/Tt5m5Z4iEsCRgGDfHLj8Dk/img.png",
//   coverImageUrl:
//     "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80",
//   description: "I'm Developer",
//   img: null,
//   githubUrl: "http://github.com/devdev",
//   blogUrl: "https://devdev.github.io/",
//   snsUrl: "https://www.instagram.com/devdev",
// };

function MemberForm({ profile }) {
  const setProfile = useSetRecoilState(profileAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm();
  const onValid = (data) => {
    console.log("어떤 데이터를 넘겨주나요?", data);
    const result = patchUser({
      id: profile.id,
      email: profile.email,
      name: data?.name,
      description: data?.description,
      img: data?.img,
      githubUrl: data?.githubUrl,
      blogUrl: data?.blogUrl,
      snsUrl: data?.snsUrl,
    });
    console.log("요청결과는?", result);
  };

  const defaultValueSet1 = (profile) => {
    console.log("defaultValueSet1 : ", profile);
    setValue("name", profile.name);
    setValue("img", null);
    setValue("email", profile.email);
    setValue("githubUrl", profile.githubUrl);
    setValue("blogUrl", profile.blogUrl);
    setValue("snsUrl", profile.snsUrl);
    setValue("description", profile.description);
  };

  const getData = async () => {
    const result = await getCurrentUser();
    defaultValueSet1(result);
    setProfile(result);

    // set atom profile 로 아톰 값 수정하는 코드 넣어야함@@@@@@@@@
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(errors);

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
                데브레인에 오신 것을 환영합니다! ✨😎
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                차곡차곡 쌓이는 "나의 성장 기록"
              </p>
            </div>

            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  닉네임
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    {...register("name", {
                      value: profile.name,
                      required: "닉네임을 입력해주세요",
                      pattern: {
                        value: /^[가-힣|a-z|A-Z|0-9|]+$/,
                        message: "유효하지 않은 닉네임 입니다.",
                      },
                    })}
                    type="text"
                    autoComplete="nickname"
                    defaultValue={profile.name}
                    className="max-w-lg block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                  <span>{errors?.nickName?.message}</span>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  프로필 사진
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="flex items-center">
                    <label className="block">
                      <input
                        {...register("img", { value: profile.img })}
                        accept="image/jpg,impge/png,image/jpeg,image/gif"
                        multiple={true}
                        type="file"
                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  이메일
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    {...register("email", { value: profile.email })}
                    type="email"
                    disabled={true}
                    autoComplete="email"
                    defaultValue={profile.email}
                    className="block max-w-lg w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  깃(GIT)
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      https://github.com/
                    </span>
                    <input
                      type="text"
                      {...register("githubUrl", { value: profile.githubUrl })}
                      autoComplete="username"
                      className="flex-1 block w-full focus:ring-purple-500 focus:border-purple-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  블로그 / 홈페이지
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    {...register("blogUrl", { value: profile.blogUrl })}
                    defaultValue={profile.blogUrl}
                    type="url"
                    autoComplete="given-name"
                    className="max-w-lg block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  SNS
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    {...register("snsUrl", { value: profile.snsUrl })}
                    defaultValue={profile.snsUrl}
                    type="url"
                    autoComplete="given-name"
                    className="max-w-lg block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  소개
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    {...register("description", { value: profile.description })}
                    rows={3}
                    defaultValue={profile.description}
                    className="max-w-lg shadow-sm block w-full focus:ring-purple-500 focus:border-purple-500 sm:text-sm border border-gray-300 rounded-md"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    간단하게 적어주세요 :){" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*<div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">*/}
          {/*  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">*/}
          {/*    <label*/}
          {/*      htmlFor="first-name"*/}
          {/*      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"*/}
          {/*    >*/}
          {/*      나만의 슬로건!*/}
          {/*    </label>*/}
          {/*    <div className="mt-1 sm:mt-0 sm:col-span-2">*/}
          {/*      <input*/}
          {/*        type="text"*/}
          {/*        {...register("slogan")}*/}
          {/*        autoComplete="given-name"*/}
          {/*        className="max-w-lg block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"*/}
          {/*      />*/}
          {/*      <p className="mt-2 text-sm text-gray-500">* 연봉 1억 가자! </p>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">*/}
          {/*    <label*/}
          {/*      htmlFor="first-name"*/}
          {/*      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"*/}
          {/*    >*/}
          {/*      가고싶은 회사*/}
          {/*    </label>*/}
          {/*    <div className="mt-1 sm:mt-0 sm:col-span-2">*/}
          {/*      <input*/}
          {/*        {...register("company")}*/}
          {/*        type="text"*/}
          {/*        autoComplete="given-name"*/}
          {/*        className="max-w-lg block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">*/}
          {/*  <div>*/}
          {/*    <h3 className="text-lg leading-6 font-medium text-gray-900">*/}
          {/*      이메일 수신 동의*/}
          {/*    </h3>*/}
          {/*    <p className="mt-1 max-w-2xl text-sm text-gray-500">*/}
          {/*      수신 동의해주세요 😭 이상한 메일 보내지 않아요 😉*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*  <div className="space-y-6 sm:space-y-5 divide-y divide-gray-200">*/}
          {/*    <div className="pt-6 sm:pt-5">*/}
          {/*      <div role="group" aria-labelledby="label-email">*/}
          {/*        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">*/}
          {/*          <div>*/}
          {/*            <div*/}
          {/*              className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"*/}
          {/*              id="label-email"*/}
          {/*            >*/}
          {/*              이메일*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*          <div className="mt-4 sm:mt-0 sm:col-span-2">*/}
          {/*            <div className="max-w-lg space-y-4">*/}
          {/*              <div className="relative flex items-start">*/}
          {/*                <div className="flex items-center h-5">*/}
          {/*                  <input*/}
          {/*                    {...register("agree")}*/}
          {/*                    type="checkbox"*/}
          {/*                    className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded"*/}
          {/*                  />*/}
          {/*                </div>*/}
          {/*                <div className="ml-3 text-sm">*/}
          {/*                  <label*/}
          {/*                    htmlFor="comments"*/}
          {/*                    className="font-medium text-gray-700"*/}
          {/*                  >*/}
          {/*                    공지 / 정보성 메일*/}
          {/*                  </label>*/}
          {/*                </div>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              프로필 수정하기
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

const UserBoard = () => {
  const [purpose, setPurpose] = useState("");
  const onclick = (props) => {
    console.log(props.target.id);
    setPurpose(props.target.id);
  };
  return (
    <>
      <form className=" divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              관심사 선택
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              지금 무엇을 준비 중인가요?
            </p>
          </div>

          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="grid grid-cols-3 gap-4 items-start ">
              <span
                id={"취업"}
                onClick={onclick}
                className={
                  "취업" === purpose
                    ? `border border-2 border-purple-600 rounded-xl p-2 my-5 cursor-pointer mr-2 text-center bg-purple-600 text-white active:bg-purple-600`
                    : `border border-2 border-purple-600 rounded-xl p-2 my-5 hover:bg-purple-100 cursor-pointer mr-2 text-center `
                }
              >
                취업
              </span>
              <span
                id={"이직"}
                onClick={onclick}
                className={
                  "이직" === purpose
                    ? `border border-2 border-purple-600 rounded-xl p-2 my-5 cursor-pointer mr-2 text-center bg-purple-600 text-white active:bg-purple-600`
                    : `border border-2 border-purple-600 rounded-xl p-2 my-5 hover:bg-purple-100 cursor-pointer mr-2 text-center `
                }
              >
                이직
              </span>
              <span
                id={"창업"}
                onClick={onclick}
                className={
                  "창업" === purpose
                    ? `border border-2 border-purple-600 rounded-xl p-2 my-5 cursor-pointer mr-2 text-center bg-purple-600 text-white active:bg-purple-600`
                    : `border border-2 border-purple-600 rounded-xl p-2 my-5 hover:bg-purple-100 cursor-pointer mr-2 text-center `
                }
              >
                창업
              </span>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              관심사 수정하기
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default function ProfilePresenter() {
  const profile = useRecoilValue(profileAtom);

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
                    src={
                      "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80"
                    }
                    alt=""
                  />
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="py-10">
          <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <section
              aria-labelledby="timeline-title"
              className="lg:col-start-1 lg:col-span-01"
            >
              <div className="bg-white p-5 shadow sm:rounded-lg border border-purple-200 ">
                {profile.img ? (
                  <img
                    className="rounded-full ring-4 ring-white h-40 w-40 place-content-center"
                    src={profile.img}
                    alt=""
                  />
                ) : null}
                <div className="">
                  <div className="mb-10">
                    {profile.name ? (
                      <h3 className="text-purple-800 my-2">{profile.name}</h3>
                    ) : null}
                    {profile.email ? (
                      <h3 className="text-purple-800 my-2">{profile.email}</h3>
                    ) : null}
                    {profile.description ? (
                      <h3 className="text-purple-800 my-2">
                        {profile.description}
                      </h3>
                    ) : null}
                    {profile.githubUrl ? (
                      <h3 className="text-purple-800 my-2">
                        {profile.githubUrl}
                      </h3>
                    ) : null}
                    {profile.blogUrl ? (
                      <h3 className="text-purple-800 my-2">
                        {profile.blogUrl}
                      </h3>
                    ) : null}
                    {profile.snsUrl ? (
                      <h3 className="text-purple-800 my-2">{profile.snsUrl}</h3>
                    ) : null}
                  </div>
                </div>
              </div>
            </section>

            <div className="space-y-6 lg:col-start-2 lg:col-span-3">
              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg border border-purple-200 ">
                  <div className="px-4 py-5 sm:px-6">
                    <MemberForm profile={profile} />
                  </div>
                </div>
              </section>
            </div>
            <div className="space-y-6 lg:col-start-2 lg:col-span-3">
              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg border border-purple-200 ">
                  <div className="px-4 py-5 sm:px-6">
                    <UserBoard />
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
