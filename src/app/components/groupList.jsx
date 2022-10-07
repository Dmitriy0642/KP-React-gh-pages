import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contenProperty,
    onItemSelect,
    selectedItem
}) => {
    return (
        <ul className="list-group">
            {Object.keys(items).map((item) => (
                <li
                    key={items[item][valueProperty]}
                    className={
                        "list-group-item" +
                        (items[item] === selectedItem ? " active" : "")
                    }
                    onClick={() => onItemSelect(items[item])}
                    role="button"
                >
                    {items[item][contenProperty]}
                </li>
            ))}
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contenProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contenProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
