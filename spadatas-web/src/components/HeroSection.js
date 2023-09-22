import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import '../App.css';
import './HeroSection.css';
const LazyCardItem = React.lazy(() => import('./CardItem'));

const defaultValue = 'default';

const user_options = [
  {label:'Any', value: defaultValue}, {label:'IT Admins', value: 'ITadmins'},
  {label:'Parents', value: 'parents'}, {label:'Principals', value: 'principals'},
  {label:'Students', value: 'students'}, {label:'Teachers', value: 'teachers'}
];
const content_options = [
  {label: 'Any', value: defaultValue}, {label: 'Best practices', value: 'best-practices'},
  {label: 'Checklist', value: 'checklist'}, {label: 'Framework', value: 'framework'},
  {label: 'Guide', value: 'guide'},{label: 'Infographic', value: 'infographic'},
  {label: 'Lesson', value: 'lesson'}, {label: 'Letter', value: 'letter'},
  {label: 'Presentation', value: 'presentation'}, {label: 'Principles', value: 'principles'},
  {label: 'Report', value: 'report'}, {label: 'Resources', value: 'resources'},
  {label: 'Survey', value: 'survey'}, {label: 'Template', value: 'template'},
  {label: 'Toolkit', value: 'toolkit'}, {label: 'Webinar', value: 'webinar'},
  {label: 'Website', value: 'website'}
];
const type_options = [
  {label: 'Any', value: defaultValue}, {label: 'Document', value: 'document'}, {label: 'Image', value: 'image'},
  {label: 'Video', value: 'video'}, {label: 'Website', value: 'website'}
];
const language_options = [
  {label: 'Any', value: defaultValue}, {label: 'English', value: 'en'}, {label: 'Spanish', value: 'es'}
];

const selectStyle = {
  control: styles => (
    { 
      ...styles,
      width: '100%',
      borderRadius: '15px',
    }
  ),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: 'rgb(100,100,100)',
    };
  },
};

var selected_user = defaultValue;
var selected_content = defaultValue;
var selected_type = defaultValue;
var selected_language = defaultValue;

var last_selected_user = selected_user;
var last_selected_content = selected_content;
var last_selected_type = selected_type;
var last_selected_language = selected_language;


function handleUserChange(e) { last_selected_user = selected_user; selected_user = e.value; }

function handleContentChange(e) { last_selected_content = selected_content; selected_content = e.value; }

function handleTypeChange(e) { last_selected_type = selected_type; selected_type = e.value; }

function handleLanguageChange(e) { last_selected_language = selected_language; selected_language = e.value; }




const elementsAtStart = 1;
var didWeSearch = false;     // Flag to know if we searched
var isResources = false;     // Flag to know if we got resources


function HeroSection() {

  const [resources, setResources] = useState([]);
  let [resourcesToShow, setResourcesToShow] = useState(null);
  let [numResourcesToShow, setNumResourcesToShow] = useState(0);

  const handleScroll = () => {
    if (didWeSearch == true) {
      if(window.innerHeight + document.documentElement.scrollTop + 750 >= document.documentElement.scrollHeight) {

          if (resources.length == 0 && numResourcesToShow == 0) {
          } else {
            if (resources.length > numResourcesToShow) {
              setNumResourcesToShow(numResourcesToShow + elementsAtStart);
            }
          }

      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[resources, numResourcesToShow]);

  useEffect(() => {
    if (resources[numResourcesToShow - 1] != undefined || resources[0] != undefined) {
      if (resourcesToShow != null) {
        var aux = resourcesToShow;
      } else {
        var aux = [];
      }

      for (let i = 0; i <= elementsAtStart; i++) {
        aux[numResourcesToShow - elementsAtStart + i - 1] = resources[numResourcesToShow - elementsAtStart + i - 1];
      }

      if (numResourcesToShow == elementsAtStart) {
        aux[0] = resources[0];
      }
      for (let i = 0; i < 3; i++) {
        if (resources[numResourcesToShow + i] != undefined) {
          aux[numResourcesToShow + i] = resources[numResourcesToShow + i];
        }
      }

      //console.log(numResourcesToShow);
      //console.log(resourcesToShow);

      setResourcesToShow(aux);
    }
  }, [numResourcesToShow]);




  async function search() {
    // Optional check to save petitions
    if (!(didWeSearch && selected_user == last_selected_user && selected_content == last_selected_content && selected_type == last_selected_type && selected_language == last_selected_language)) {
      didWeSearch = true;
      var url = 'http://localhost:8081/resources'
      + '?user=' + selected_user + '&content=' + selected_content
      + '&type=' + selected_type + '&language=' + selected_language;
    
      const res = await fetch(url);
      setResources(await res.json());
      setNumResourcesToShow(elementsAtStart);
      setResourcesToShow(null);
    }

    console.log(numResourcesToShow);
    console.log(resources);
    console.log(resourcesToShow);


  }

  function showResources() {
    if (resourcesToShow != null) {
      isResources = true;
      return (
        <>
        {resourcesToShow.map((resource) => {
          if (resource != undefined) {
            return (
              <React.Suspense fallback={
                                  <div className='hero-loading-container'>
                                    <img className='hero-loading-logo' src='/videos/loading_animated_icon.png' alt="Loading Logo" />
                                  </div>
              }>
                <LazyCardItem title={resource.title} author={resource.title} description={resource.description} link={resource.link}/>
              </React.Suspense>
            );
          }
        })}
      </>
      );
    } //else if (numResourcesToShow > 0) {
      //isResources = true;
    //}
  }

  function showNoResources() {
    if (didWeSearch) {
      if (!isResources) {
        return (
          <div className='hero-no-results'>
              <p>Oops!</p>
              <p>Looks like no resource matches this criteria</p>
          </div>
        );
      } else {
        isResources = false;
      }
    }
  }



  return (
    <div className='hero-container'>
      <h1>Search for resources</h1>

      <div className='hero-subtitle'>
        <h2>Good practices for data fragility are essential in academics</h2>
        <h2>You will find all the resources you need here</h2>
      </div>


      <div className='hero-search-bar'>

        <div className='hero-search-item'>
          <p className='hero-search-label'>User</p>
          <Select className='hero-search-select' options={user_options} defaultValue={user_options[0]} onChange={handleUserChange} styles={selectStyle}/>
        </div>

        <div className='hero-search-item'>
          <p className='hero-search-label'>Content</p>
          <Select className='hero-search-select' options={content_options} defaultValue={content_options[0]} onChange={handleContentChange} styles={selectStyle}/>
        </div>

        <div className='hero-search-item'>
          <p className='hero-search-label'>Type</p>
          <Select className='hero-search-select' options={type_options} defaultValue={type_options[0]} onChange={handleTypeChange} styles={selectStyle}/>
        </div>

        <div className='hero-search-item'>
          <p className='hero-search-label'>Language</p>
          <Select className='hero-search-select' options={language_options} defaultValue={language_options[0]} onChange={handleLanguageChange} styles={selectStyle}/>
        </div>


        <button onClick={search} className='hero-search-button'>Search</button>

      </div>


      <div className='hero-element-container'>
        {showResources()}
      </div>
      {showNoResources()}
    </div>
  );
}

export default HeroSection;