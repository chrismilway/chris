import React from 'react';

const SHEET_ID = '14YuaCm0-0t5knx5Io8THSDn3IcAqvtn2B-o0ZHB_S7I';
const API_KEY = 'AIzaSyD4KBu9Uk0Fq_hJ8c7Zz5kbkGxM8LYU6wM';

export default class Fetch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
		};
	}

	componentDidMount() {
		const { sheet, end = 'A' } = this.props;
		fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values:batchGet?ranges=${sheet}!A:${end}&key=${API_KEY}`)
			.then(response => response.json())
			.then(this.handleData.bind(this))
			.catch(console.error);
	}

	handleData(d) {
		const { values } = d.valueRanges[0];
		const keys = values.shift();
		const data = values.map(value => {
			return value.reduce((a, v, i) => {
				a[keys[i]] = v;
				return a;
			}, {});
		});
		this.setState({ data });
	}

	render() {
		const { data } = this.state;
		return (data)
			? this.props.render
				? this.props.render(data)
				: <p>{JSON.stringify(data)}</p>
			: <p>loading...</p>;
	}
}
