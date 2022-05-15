import React, { useEffect, useState } from "react";
import { getTIL, getTILCrts, deleteTIL } from "../../../../apis/api";
import { Link, useParams, useNavigate } from "react-router-dom";

const profile = {
  coverImageUrl:
    "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
};

function DetailHomePresenter(props) {
  const { id } = useParams();
  const [tilDetail, setTilDetail] = useState("");
  const [crtList, setCrtList] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const getTILDetail = await getTIL(id);
    const getCrtList = await getTILCrts({ id: id, page: 0 });
    setTilDetail(getTILDetail);
    if (getCrtList?._embedded?.tilCrtDTOList !== undefined) {
      setCrtList((prev) => [...prev, ...getCrtList?._embedded?.tilCrtDTOList]);
    }
  };
  const delTIL = () => {
    if (window.confirm("정말 삭제합니까?")) {
      deleteTIL({ id: id });
      navigate(`/til`);
      alert("TIL이 삭제되었습니다.");
    } else {
      alert("취소되었습니다.");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="min-h-full">
        <div className="flex flex-col min-w-0 flex-1">
          <div className="flex-1 relative z-0 flex">
            <main className="flex-1 relative z-0 xl:order-last">
              <div>
                <img
                  className="h-32 w-full object-cover lg:h-64"
                  src={profile.coverImageUrl}
                  alt=""
                />
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-6">
            <div className="col-span-2 mb-3 pl-4">
              <span className="ml-6 text-lg leading-6 font-medium text-gray-900">
                {tilDetail.subject}
              </span>
              <div className="mt-4 mb-2 ml-6 mr-3">
                <span className="text-base text-gray-500">
                  인증회수 {tilDetail.crtCnt}회
                </span>
                <span className="ml-3 text-base text-gray-500">|</span>
                <span className="ml-3 text-base text-gray-500">
                  남은인증 {tilDetail.totalCnt - tilDetail.crtCnt}회
                </span>
                <span className="ml-3 text-base text-gray-500">|</span>
                <span className="ml-3 text-base text-gray-500">
                  {tilDetail.totalCnt <= tilDetail.crtCnt && tilDetail.expired
                    ? "달성"
                    : tilDetail.expired
                    ? "미달"
                    : "진행"}
                </span>
              </div>
              <div className="mt-1 mr-6 ml-6">
                <span className="mt-3 text-base text-gray-500">
                  {tilDetail.startDate} ~ {tilDetail.endDate}
                </span>
                {/*<span className="mt-2 ml-6 text-base text-gray-500 ml-5 ">*/}
                {/*  🗓 7일 뒤 종료*/}
                {/*</span>*/}
              </div>
              <div className="mt-2 ml-6 mr-6">
                <progress
                  className="progress progress-primary w-56 "
                  value={parseInt(
                    (tilDetail.crtCnt / tilDetail.totalCnt) * 100
                  )}
                  max="100"
                />
                <span className="ml-5">
                  {parseInt((tilDetail.crtCnt / tilDetail.totalCnt) * 100)}%
                </span>
              </div>
            </div>
            <div className="col-span-2 sm:mb-6 px-6">
              <span className="ml-6 text-lg leading-6 font-medium text-gray-900 whitespace-pre-wrap" />
              <h3 className="text-base text-gray-500 whitespace-pre-wrap mt-3 line-clamp-3">
                {`${tilDetail.description}`}
              </h3>
              {/*<label className="flex justify-end">더보기</label>*/}
            </div>
            <div className="col-span-2 pr-10 pl-10">
              <Link to={`/til/${id}/certification`}>
                <button className=" w-full h-full hover:bg-purple-700 bg-purple-600 text-white rounded-box">
                  <p className="text-5xl">+</p>
                  <p>인증하기</p>
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {crtList === []
                ? null
                : crtList.map((crt) => {
                    const regDate = new Date(crt.regDate);

                    const dayNames = [
                      "(일)",
                      "(월)",
                      "(화)",
                      "(수)",
                      "(목)",
                      "(금)",
                      "(토)",
                    ];
                    // getDay: 해당 요일(0 ~ 6)를 나타내는 정수를 반환한다.
                    const day = dayNames[regDate.getDay()];

                    const year = regDate.getFullYear();
                    const month = regDate.getMonth() + 1;
                    const date = regDate.getDate();

                    const changeDate = `${year}. ${month}. ${date}. ${day}`;

                    return (
                      <Link to={`/til/${id}/${crt.id}`}>
                        <div className="group relative p-10" key={crt}>
                          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                              src={
                                crt.fileList[0]
                                  ? crt.fileList[0]?.path
                                  : "https://blog.kakaocdn.net/dn/bgeLnn/btrt43tT2db/aQcknBuj3SHbKkX5WSrwDK/img.gif"
                              }
                              alt="Front of men&#039;s Basic Tee in black."
                              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                          </div>
                          <div className="mt-4">
                            <div>
                              <h3 className="text-sm text-gray-700 line-clamp-3 whitespace-pre-wrap">
                                {crt.description}
                              </h3>
                              <div className="flex justify-end items-center py-1">
                                <span className="text-sm font-medium text-gray-900">
                                  {changeDate}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
            </dl>
          </div>
          <div className="pt-5 pr-10">
            <div className="flex justify-end ">
              <Link to={`/til/${id}/update`}>
                <button className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  TIL 수정하기
                </button>
              </Link>

              <button
                onClick={delTIL}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                TIL 삭제하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailHomePresenter;
