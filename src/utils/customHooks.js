import { useState, useCallback } from 'react';

//
export function useInput( initialValue ) {
   let [ value, setValue ] = useState( initialValue );
   let onChange = useCallback( function( event ) {
      setValue( event.currentTarget.value );
   }, [] );

   return {
      value,
      onChange,
   };
}
