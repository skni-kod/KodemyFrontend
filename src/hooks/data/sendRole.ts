export async function sendRole(userId: string, newRole: number) {
	try {
		const response = await fetch(`http://localhost:8080/api/users/${userId}/roles`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ newRole }),
			credentials: 'include',
		});
		console.log('response.status ', response.status);
		if (response.status === 200) {
			console.log('New role sent to the database successfully.');
		} else {
			console.error('Failed to send the new role to the database.');
		}
	} catch (error) {
		console.error('An error occurred while sending the new role:', error);
	}
}
