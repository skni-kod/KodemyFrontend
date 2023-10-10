const checkPermission = async () => {
	try {
		const response = await fetch('http://localhost:8181/api/users/me', {
			credentials: 'include',
		});

		if (response.ok) {
			const userData = await response.json();
			const userRole = userData.role;
			return (
				userRole.name === 'ROLE_MODERATOR' ||
				userRole.name === 'ROLE_ADMIN' ||
				userRole.name === 'ROLE_SUPERADMIN'
			);
		} else {
			return false;
		}
	} catch (error) {
		console.error('Błąd zapytania:', error);
		return false;
	}
};

export default checkPermission;
