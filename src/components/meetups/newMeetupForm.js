import React, { useRef, useState } from "react";
import Card from "../ui/Card";
import classes from "./newMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleRef = useRef();
  const urlRef = useRef();
  const descriptionRef = useRef();
  const addressRef = useRef();
  // const [value, setValue] = useState({
  //   title: props.meetup.title,
  //   image: props.meetup.image,
  //   address: props.meetup.address,
  //   description: props.meetup.description,
  // });

  // function prePopulate(event) {
  //   const { id, value } = event.target;
  //   setValue((prevValues) => {
  //     if (id === "title") {
  //       return { ...prevValues, title: value };
  //     } else if (id === "image") {
  //       return { ...prevValues, image: value };
  //     } else if (id === "address") {
  //       return { ...prevValues, address: value };
  //     } else if (id === "description") {
  //       return { ...prevValues, description: value };
  //     }
  //   });
  // }
  function formData(event) {
    event.preventDefault();

    const title = titleRef.current.value;
    const image = urlRef.current.value;
    const description = descriptionRef.current.value;
    const address = addressRef.current.value;

    const meetup = {
      title: title,
      image: image,
      address: address,
      description: description,
    };

    props.dataSubmition(meetup);
  }
  return (
    <section>
      <h1>Add new-meetup</h1>;
      <Card>
        <form className={classes.form} onSubmit={formData}>
          <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input
              type="text"
              id="title"
              ref={titleRef}

              // onChange={prePopulate}
              // value={value.title}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <input
              type="url"
              id="image"
              required
              ref={urlRef}
              // value={value.image}
              // onChange={prePopulate}
            />
          </div>
          <address className={classes.control}>
            <label htmlFor="address">Meetup Address</label>
            <input
              type="text"
              id="address"
              required
              ref={addressRef}
              // onChange={prePopulate}
              // value={value.address}
            />
          </address>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              required
              rows="5"
              ref={descriptionRef}
              // value={value.description}
              // onChange={prePopulate}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>
        </form>
      </Card>
    </section>
  );
}

export default NewMeetupForm;
