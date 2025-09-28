import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CommListStyle = styled.div`
  width: 50%;
  border: solid 1px #2d435d;
  border-radius: 8px;
  background-color: #18202a;
  color: #e0e5ec;
  padding: 5px;
`;

const CommPost = styled.div`
  border: solid 1px #2d435d;
  gap: 20px;
  margin-bottom: 7px;
  background-color: #18202a;
`;

const UserNick = styled.div`
  padding: 5px;
  background-color: #2d435d;
  color: #ffffff;
`;

const CommText = styled.div`
  margin: 10px;
  color: #8499c3;
`;

const CommDate = styled.div`
  font-size: 10px;
`;

const CommList = ({ commList }) => {
  console.log(commList);
  return (
    <CommListStyle>
      Комментарии:
      {commList.map((comm) => {
        return (
          <CommPost>
            <UserNick>
              {comm.nickname}
              <CommDate>{comm.date.toLocaleString()}</CommDate>
            </UserNick>
            <CommText>{comm.commText}</CommText>
          </CommPost>
        );
      })}
    </CommListStyle>
  );
};

CommList.propTypes = {
  commList: PropTypes.array.isRequired,
};

export default CommList;
