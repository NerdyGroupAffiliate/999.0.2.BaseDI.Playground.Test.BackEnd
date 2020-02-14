import React from "react";
import ListCompactItemView from "../../components/ListCompactItemView";
import "./index.css"

export default ({ item }) => {
  return (
    <ListCompactItemView>
        <item key={item.key}>{item.list_item}</item>
    </ListCompactItemView>
  );
};
