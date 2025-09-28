import React from "react";
import PropTypes from "prop-types";
import "bootstrap-icons/font/bootstrap-icons.css";
import styled from "styled-components";

const SortButtonsBoard = styled.div`
  width: fit-content;
  margin-right: auto;
  color: #e0e5ec;
  padding: 5px;
  display: flex;
  font-size: 25px;
`;

const SortButtons = ({ onSort, selectedSort }) => {
  const renderArrow = (item) => {
    if (selectedSort.iter === item && selectedSort.iter) {
      if (selectedSort.order === "asc") {
        return "bi bi-caret-up";
      } else {
        return "bi bi-caret-down";
      }
    } else {
      return "";
    }
  };

  const HandleSort = (item) => {
    if (selectedSort.iter === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "desc" ? "asc" : "desc",
      });
    } else {
      onSort({
        iter: item,
        order: "desc",
      });
    }
  };

  return (
    <SortButtonsBoard>
      <span className="sortirovatb">Сортировать по:</span>
      <button
        className={`sort_button ` + renderArrow("year")}
        onClick={() => HandleSort("year")}
      >
        Год
      </button>
      <button
        className={`sort_button ` + renderArrow("rate")}
        onClick={() => HandleSort("rate")}
      >
        Рейтинг
      </button>
      <button
        className={`sort_button ` + renderArrow("views")}
        onClick={() => HandleSort("views")}
      >
        Просмотры
      </button>
    </SortButtonsBoard>
  );
};

SortButtons.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
};

export default SortButtons;
