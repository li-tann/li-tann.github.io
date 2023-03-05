import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';

import styles from './index.module.css';
import HomePage from '../components/Homepage';

function Home() {
	const context = useDocusaurusContext();
	let { siteConfig } = context;

	siteConfig.title = translate({
		id: 'global.title',
		message: siteConfig.title,
		description: 'The website title',
	});
	siteConfig.tagline = translate({
		id: 'global.tagline',
		message: siteConfig.tagline,
		description: 'The website tagline',
	});
	siteConfig.customFields.description = translate({
		id: 'global.description',
		message: siteConfig.customFields.description as string,
		description: 'The website description',
	});
	const lines = [
		translate({
			id: 'homepage.description.descriptionLine_1',
			message: 'SAR软件研发工程师',
			description: 'The fst line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_2',
			message: '从事InSAR软件研发与测试工作',
			description: 'The sec line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_1',
			message: '👨‍💻/👨‍🔬',
			description: 'The fst line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_5',
			message: '分享所学所见',
			description: 'The first line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_5',
			message: '(Ctrl+C -> Ctrl+V)',
			description: 'The first line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_4',
			message: 'InSAR / C++ / Qt / CMake / ...',
			description: 'The first line of description',
		}),
	];

	return (
		<Layout
			title={siteConfig.title}
			description={siteConfig.customFields.description as string}
		>
			<main className={styles.heroContainer}>
				<HomePage {...siteConfig} descriptionLines={lines} />
			</main>
		</Layout>
	);
}

export default Home;