import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const ProjectVideo = ({ filename, alt }) => (
  // <video className="embed-responsive" loop autoPlay playsInline muted>
  //   <source
  //     className="embed-responsive-item"
  //     src={require(`../../videos/${filename}`)}
  //     type="video/mp4"
  //   />
  // </video>
  <div
    dangerouslySetInnerHTML={{
      __html: `
<video class="embed-responsive" loop autoplay playsinline muted>
<source
  class="embed-responsive-item"
  src=${require(`../../videos/${filename}`)}
  type="video/mp4"
/>
</video>
`,
    }}
  />
);

ProjectVideo.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectVideo;
