import React, { useEffect, useState } from "react";
import { getTIL, getTILCrts } from "../../../../apis/api";
import { Link, useParams } from "react-router-dom";
const profile = {
  coverImageUrl:
    "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
};

function DetailHomePresenter(props) {
  const { id } = useParams();
  const [tilDetail, setTilDetail] = useState("");
  const [crtList, setCrtList] = useState([]);

  const getData = async () => {
    const getTILDetail = await getTIL(id);
    const getCrtList = await getTILCrts(1);
    setTilDetail(getTILDetail);
    setCrtList((prev) => [...prev, ...getCrtList._embedded.tilCrtDTOList]);
    console.log("받아왔나요?", ...getCrtList._embedded.tilCrtDTOList);
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
            <div className="col-span-2 mb-3">
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
                  {tilDetail.totalCnt <= tilDetail.crtCnt
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
              {crtList.map((crt) => {
                console.log("crt단품", crt);
                return (
                  <div className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
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
                            22. 01. 03 (금)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailHomePresenter;
