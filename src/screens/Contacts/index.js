import React, { useState } from "react";
import cn from "classnames";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import DropdownSelect from "../../components/DropdownSelect";
import Breadcrumbs from "../../components/Breadcrumbs";
import styles from "./Contacts.module.sass";

const breadcrumbs = [
  {
    title: "Home Page",
    url: "/",
  },
  {
    title: " Categories",
    url: "/Category",
  },
  {
    title: "Contact Us",
  },
];

const items = [
  {
    category: "Customer Services",
    text: 'Please send us an email at <a href="#">customercare@lplcamping.example</a>',
  },
  {
    category: "Public Relations",
    text: 'You can contact our media team by sending them an email at <a href="#">mediae@lplcamping.example</a>',
  },
  {
    category: "Large Orders",
    text: 'If you are thinking of making a very large order, plese feel free to contact us at <a href="#">salese@lplcamping.example</a> and we will give you a special discount',
  },
  {
    category: "Other Enquiries",
    text: 'For all of your other questions, please send us an email at <a href="#">generale@lplcamping.example</a>',
  },
];

const subjectOptions = ["Choose Subject", "Subject 01", "Subject 02"];

function Contacts() {
  const [subject, setSubject] = useState(subjectOptions[0]);
  return (
    <>
      <Breadcrumbs value={breadcrumbs} />
      <div className={cn("section")}>
        <div className={styles.details}>
          <div className={cn("center")}>
            <div className={cn("stage")}>- Ask Questions</div>
            <h2 className={cn("title", styles.title)}>
              We are always here to <br />
              help you
            </h2>
            <div className={styles.list}>
              {items.map((x, i) => (
                <div className={styles.item} key={i}>
                  <div className={styles.category}>{x.category}</div>
                  <div className={styles.text} dangerouslySetInnerHTML={{ __html: x.text }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={cn("center", styles.center)}>
            <div className={styles.row}>
              <div className={styles.wrap}>
                <div className={cn("stage")}>- Reach Out to Us</div>
                <h2 className={cn("title", styles.title)}>Please fill out the contact form</h2>
              </div>
              <div className={styles.form}>
                <TextInput className={styles.field} label="Full Name" name="name" type="text" />
                <TextInput className={styles.field} label="Email Address" name="address" type="email" />
                <DropdownSelect className={cn(styles.field, "wide")} label="Subject" value={subject} setValue={setSubject} options={subjectOptions} />
                <TextArea className={styles.field} label="Message" name="message" />
                <button className={cn("button button-green", styles.button)}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
