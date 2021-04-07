import React from "react";

const SocialMediaLinks = [
  {
  name: 'Twitter',
  url: 'https://twitter.com/hellonehha'
},
{
  name: 'Linkedin',
  url: 'https://www.linkedin.com/in/nehha/'
},
{ 
  name: 'Dev',
  url: 'https://dev.to/dashboard'
}
];

const createSocialMediaList = (SocialMediaLinks) => {
  return SocialMediaLinks.map((value,key) => {
    return <li id={key}><a href={value.url} target="_blank">{value.name}</a></li>
  })
}

const Nav = () => {
  return (
    <nav>
      <ul>
        {createSocialMediaList(SocialMediaLinks)}
      </ul>
    </nav>
  );
};

export default Nav;
