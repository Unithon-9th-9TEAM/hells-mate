import React, { HTMLAttributes, useState } from "react";
import { css } from "@emotion/react";
import BottomSheet from "components/common/ButtomSheet";
import {
  ProfileImage,
  ProfileNameText,
  ProfilePictureBase,
  StyledProfile,
} from "components/common/Profile/styles";
import MainPageBottomSheetSection from "components/pages/main/sections/MainPageBottomSheetSection";
import { resetButtonStyle } from "styles/utils/button";

import defaultProfilePicture from "/public/images/default_profile_icon.svg";

interface Props extends HTMLAttributes<HTMLDivElement> {
  member: string;
  checkStatusInfo: boolean[];
}

function Profile({ member, checkStatusInfo, ...props }: Props) {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <StyledProfile {...props}>
      <button
        css={css`
          ${resetButtonStyle};
          height: 40px; // TODO: 알 수 없는 이유로 높이 지정 안하면 이미지보다 큰 버튼이 생성됨.
        `}
        onClick={() => {
          setIsShowing(true);
          // console.log(member.id, MOCKUP_MEMBERS[0].id);
        }}
      >
        <ProfilePictureBase>
          <ProfileImage src={defaultProfilePicture} />
        </ProfilePictureBase>
      </button>
      <BottomSheet
        isShowing={isShowing}
        onClose={() => {
          setIsShowing(false);
        }}
      >
        <MainPageBottomSheetSection
          member={member}
          currentUser={member}
          checkStatusInfo={checkStatusInfo}
        />
      </BottomSheet>

      <ProfileNameText>{member}</ProfileNameText>
    </StyledProfile>
  );
}

export default Profile;
