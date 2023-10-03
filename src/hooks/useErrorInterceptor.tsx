import React, { useCallback, useContext, useState } from 'react';
import ErrorInterceptorContext from '@/contexts/ErrorInterceptorContext';

const useErrorInterceptor = () => {
	return useContext(ErrorInterceptorContext);
};

export default useErrorInterceptor;
