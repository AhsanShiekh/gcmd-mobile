import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import AppText from "../AppText/AppText";

const CommentModal = ({ show, onClose, data }) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    setComment(data);
  }, [data]);

  return (
    <View>
      <Modal
        isVisible={show}
        onBackdropPress={onClose}
        animationIn="zoomIn"
        animationOut={"zoomOut"}
      >
        <ScrollView style={styles.root}>
          {comment.map((c, idx) => (
            <View
              key={idx}
              style={{
                ...styles.card,
                marginBottom: !comment[idx + 1] ? 20 : 0,
              }}
            >
              <View style={{ flexDirection: "row", marginVertical: 5 }}>
                <AppText variant={"body"} color="black" weight={"bold"}>
                  Test Name:{" "}
                </AppText>
                <AppText variant={"body"} color="black">
                  {c.ServiceName}
                </AppText>
              </View>
              <View style={{ flexDirection: "row", marginVertical: 5 }}>
                <AppText variant={"body"} color="black" weight={"bold"}>
                  Posted By:{" "}
                </AppText>
                <AppText variant={"body"} color="black">
                  {c.CreatedBy}
                </AppText>
              </View>
              <View style={{ flexDirection: "row", marginVertical: 5 }}>
                <AppText variant={"body"} color="black" weight={"bold"}>
                  Posted On:{" "}
                </AppText>
                <AppText variant={"body"} color="black">
                  {c.CreatedOn.split("T")[0] +
                    " at " +
                    c.CreatedOn.split("T")[1].slice(0, 5)}
                </AppText>
              </View>
              <View style={{ marginVertical: 5 }}>
                <AppText variant={"body"} color="#052C66" weight={"bold"}>
                  MESSAGE:{" "}
                </AppText>
                <AppText variant={"body"} color="#052C66" weight={"bold"}>
                  {c.Remarks}
                </AppText>
              </View>
            </View>
          ))}
        </ScrollView>
      </Modal>
    </View>
  );
};

export default CommentModal;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 15,
    maxHeight: 300,
    borderRadius: 15,
    backgroundColor: "white",
  },
  card: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "grey",
    paddingVertical: 10,
  },
});
