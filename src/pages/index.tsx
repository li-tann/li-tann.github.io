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
			message: '我是一名小小的SAR软件研发工程师👨‍💻/👨‍🔬，目前主要从事InSAR方向🛰️的软件研发工作。',
			description: 'The first line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_1',
			message: '-',
			description: 'The first line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_1',
			message: '工作中常常会遇到一些“奇奇怪怪”的问题，在解决问题的过程中又会学到一些“稀奇古怪”的知识',
			description: 'The first line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_1',
			message: '-',
			description: 'The first line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_1',
			message: '有些知识使用间隔很久，等到下次用到时大概率会忘记，于是遍有了这本笔记📓，又或是工具箱🧰',
			description: 'The first line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_1',
			message: '-',
			description: 'The first line of description',
		}),
		translate({
			id: 'homepage.description.descriptionLine_1',
			message: '现在它主要用于记录一些“冷门”（对我来说）的知识点，以及一些常用的需要不定期巩固的知识点',
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