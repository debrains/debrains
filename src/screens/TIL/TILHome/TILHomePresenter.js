import React from "react";
const profile = {
  coverImageUrl:
      'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
}

function TILHomePresenter(props) {
  return (
      <div className="min-h-full">
        <div className="flex flex-col min-w-0 flex-1">
          <div className="flex-1 relative z-0 flex">
            <main className="flex-1 relative z-0 xl:order-last">
              <div>
                <div>
                  <img className="h-32 w-full object-cover lg:h-64" src={profile.coverImageUrl} alt="" />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
  );
}

export default TILHomePresenter;
