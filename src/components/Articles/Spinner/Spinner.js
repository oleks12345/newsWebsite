import React from 'react';
import { StyledSpinner } from './Spinner_styles';

const Spinner = () => (
   <StyledSpinner viewBox="0 0 50 50">
      <circle
         className="path"
         cx="25"
         cy="25"
         r="20"
         fill="none"
         strokeWidth="5"
      />
   </StyledSpinner>
);

export default Spinner;

//credit https://gist.github.com/knowbody/578b35164b69e867ed4913423f6bed30
