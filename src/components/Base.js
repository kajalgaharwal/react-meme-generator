import React from 'react';
// import baseImg from '../images/memeLogo.png';
// import emptyStar from '../images/star_empty.png';
// import filledStar from '../images/star_filled.png';

export default function Base(props) {
  // const [formData, setFormData] = React.useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   comments: '',
  //   isFriendly: true,
  //   employement: '',
  //   favColor: ''
  // });
  // const [starWarsData, setStarWarsData] = React.useState({});
  // const [count, setCount] = React.useState(1);

  // React.useEffect(() => {
  //   fetch(`https://swapi.dev/api/people/${count}`)
  //     .then(res => res.json())
  //     .then(data => setStarWarsData(data));
  // }, [count]);

  // console.log(formData);
  // function chnageFormData(event) {
  //   const { name, value, type, checked } = event.target;

  //   setFormData(prevFormData => {
  //     return {
  //       ...prevFormData,
  //       [name]: type === 'checkbox' ? checked : value
  //     };
  //   });
  // }
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   // console.log('kakjhs');
  // }
  // const [contact, setContact] = React.useState({
  //   firstName: 'Kajal',
  //   lastName: 'Gaharwal',
  //   phone: '7238984873',
  //   email: 'abc@gmail.com',
  //   isFavourite: false
  // });
  // const starIcon = contact.isFavourite ? emptyStar : filledStar;
  // function toggleStar() {
  //   setContact(prevContact => {
  //     return {
  //       ...prevContact,
  //       isFavourite: !prevContact.isFavourite
  //     };
  //   });
  // }
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', watchWidth);
    return function() {
      window.removeEventListener('resize', watchWidth);
    };
  }, []);
  return (
    <div>
      <h1>window Width::: {windowWidth}</h1>
      {/* <button onClick={() => setCount(count + 1)}>hit Me</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre> */}
      {/* <form action='somephp.php' onSubmit={handleSubmit}>
        First Name::
        <input
          type='text'
          onChange={chnageFormData}
          id=''
          name='firstName'
          value={formData.firstName}
        />
        Last Name::
        <input
          type='text'
          onChange={chnageFormData}
          id=''
          name='lastName'
          value={formData.lastName}
        />
        Email::
        <input
          type='email'
          onChange={chnageFormData}
          id=''
          name='email'
          value={formData.email}
        />
        Comments::
        <textarea
          onChange={chnageFormData}
          id=''
          name='comments'
          value={formData.comments}
        />
        Are you introvert
        <input
          type='checkbox'
          name='isFriendly'
          checked={formData.isFriendly}
          id=''
          onChange={chnageFormData}
        />
        <label class='form-check-label' for='flexRadioDefault1'>
          part-time
        </label>
        <input
          class='form-check-input'
          type='radio'
          name='employement'
          id='partime'
          value='part-time'
          checked={formData.employement === 'part-time'}
          onChange={chnageFormData}
        />
        <label class='form-check-label' for='flexRadioDefault1'>
          employed
        </label>
        <input
          class='form-check-input'
          type='radio'
          name='employement'
          id='employed'
          value='employed'
          checked={formData.employement === 'employed'}
          onChange={chnageFormData}
        />
        <label class='form-check-label' for='flexRadioDefault2'>
          unemployed
        </label>
        <input
          class='form-check-input'
          type='radio'
          name='employement'
          id='unemployed'
          value='unemployed'
          checked={formData.employement === 'unemployed'}
          onChange={chnageFormData}
        />
        <select id='favColor' onChange={chnageFormData} name='favColor'>
          <option selected>Open this select menu</option>
          <option value='red'>red</option>
          <option value='blue'>blue</option>
          <option value='green'>green</option>
        </select>
        <button>Submit</button>
      </form> */}
      {/* <img src={baseImg} alt='' />
      <img src={starIcon} onClick={toggleStar} alt='' />
      <h2>{contact.firstName}</h2>
      <span>
        <h2>{contact.lastName}</h2>
      </span>
      <h4>{contact.phone}</h4>
      <h4>{contact.email}</h4> */}
    </div>
  );
}
