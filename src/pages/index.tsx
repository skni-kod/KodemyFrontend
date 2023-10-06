import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Favicon from '@/assets/favicon.ico';
import HomeBubble from '@/components/home/bubble/HomeBubble';
import { Metadata } from '@/pages/_app';
import Page from '@/components/common/Page';
import Container from '@/components/common/Container';
import HomeContent from '@/components/home/HomeContent';

export default function Home() {
	return (
		<Page
			title="Home"
			description={Metadata.description}
			addTags={
				<>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="hight" content="width=device-width, initial-scale=1" />
					<link rel="icon" href={Favicon.src} />
				</>
			}
		>
			<Container>
				<HomeContent/>
			</Container>
		</Page>
	);
}
