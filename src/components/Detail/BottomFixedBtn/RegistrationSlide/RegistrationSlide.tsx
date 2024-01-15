import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { useRecoilValue } from "recoil";

import styles from "./RegistrationSlide.module.scss";

import CloseIcon from "@/assets/close.svg?react";
import { isRegistrationSelectedState } from "@/recoil/detail/detail";

import RegistrationListItem from "./RegistrationListItem/RegistrationListItem";
import RegistrationTripSpace from "./RegistrationTripSpace/RegistrationTripSpace";

import { RegistrationSlideProps } from "@/types/detail";

function RegistrationSlide({ onClose }: RegistrationSlideProps) {
  const isValuedArray = useRecoilValue<string[]>(isRegistrationSelectedState);
  const [isTripSelected, setIsTripSelected] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          onClose();
          document.body.style.removeProperty("overflow");
        }}
      >
        <CloseIcon width="2rem" height="2rem" />
      </button>
      <div className={styles.container__createBtn}>
        <button className={styles.container__CreateBtn} onClick={() => {}}>
          <CiEdit fontSize="2.2rem" />
          <span>새 투표 생성</span>
        </button>
      </div>
      <div className={styles.container__tripTitle}>여행 스페이스</div>
      <RegistrationTripSpace setIsTripSelected={setIsTripSelected} />
      <div className={styles.container__voteTitle}>투표리스트</div>
      {isTripSelected ? (
        <div>
          <div className={styles.container__voteSelected}>
            <span>후보로 등록할 투표 제목을 선택해주세요</span>
          </div>
          <div className={styles.container__voteList}>
            <RegistrationListItem
              title="맛집 어디갈까"
              isSelectedProps={true}
            />
            {/*  초과 글씨 ... 처리 해야함*/}
            <RegistrationListItem
              title="둘째 날 숙소 어디서 묵지?"
              isSelectedProps={false}
            />
            <RegistrationListItem
              title="루프탑 카페 정하자~"
              isSelectedProps={false}
            />
          </div>
        </div>
      ) : (
        <div className={styles.container__voteUnSelected}>
          <span>여행을 먼저 선택해주세요</span>
        </div>
      )}
      <button
        className={styles.container__bottomFixedBtn}
        style={
          isValuedArray.length > 0
            ? { backgroundColor: "#2388FF", color: "#FFFFFF" }
            : { backgroundColor: "#E3E5E5", color: "#979C9E" }
        }
      >
        후보 등록
      </button>
    </div>
  );
}

export default RegistrationSlide;