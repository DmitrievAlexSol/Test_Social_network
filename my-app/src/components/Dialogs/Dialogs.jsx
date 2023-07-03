import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElement = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElement}</div>
      </div>
    </div>
  );
};

export default Dialogs;
