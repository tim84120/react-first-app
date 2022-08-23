const Item = ({ id, note, date, time, deleteData, submittingStatus }) => {
  function deletItem() {
    console.log(submittingStatus);
    submittingStatus.current = true;
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }
  return (
    <div className="item">
      <p>{note}</p>
      <p>{`${date} ${time}`}</p>
      <button onClick={deletItem} className="remove">
        刪除
      </button>
    </div>
  );
};
export default Item;
