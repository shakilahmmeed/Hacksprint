import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/DashNav";
import Footer from "../components/Footer/Footer";
import AdOne from "../components/Ad/AdOne";
import Sidebar from "../components/Sidebar/Sidebar";
export default class Practice extends Component {
	state = {
		practices: [],
	};

	componentDidMount() {
		axios
			.get(`http://localhost:8000/tracks/${this.props.match.params.trackId}/`, {
				headers: {
					Authorization: "Token 14c791bb695d794042f05be9044bd964821de246",
				},
			})
			.then((res) => {
				const practices = res.data;
				this.setState({ practices });
			});
	}

	render() {
		return (
			<div>
				<Navbar />
				<div className="pt-4 pb-5 bg-color">
					<div className="container">
						<div className="ui two column grid">
							<div className="twelve wide column">
								<div className="challenges">
									<div className="section-title">
										<h2>Practice</h2>
									</div>
									<div className="ui cards mt-1">
										{this.state.practices.map((practice) => (
											<div className="card w-100">
												<Link
													to={this.props.match.url + "/" + practice.id}
													className="content"
												>
													<div className="header">{practice.title}</div>
													<div className="meta">Friend</div>
													<div className="description">
														lorem ipsum dolor sit amet
													</div>
												</Link>
											</div>
										))}
									</div>
								</div>
							</div>
							<div className="four wide column mt-5">
								<div className="c-type">
									<h4>Difficulty</h4>
									<div className="wrapper d-flex flex-column">
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Easy</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Medium</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Hard</label>
										</div>
									</div>
								</div>
								<div className="c-topic mt-3">
									<h4>Subdomains</h4>
									<div className="wrapper d-flex flex-column">
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Template</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Style</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Script</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Server Side Programming</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>REST API</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Database</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Deployment</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>CI/CD</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export class SinglePractice extends Component {
	state = {
		data: {},
		author: {},
	};

	componentDidMount() {
		axios
			.get(
				`http://localhost:8000/tracks/${this.props.match.params.trackId}/${this.props.match.params.practiceId}/`,
				{
					headers: {
						Authorization: "Token 14c791bb695d794042f05be9044bd964821de246",
					},
				}
			)
			.then((res) => {
				const data = res.data;
				this.setState({ data });

				return axios.get(
					`http://localhost:8000/profile/${this.state.data.author}`,
					{
						headers: {
							Authorization: "Token 14c791bb695d794042f05be9044bd964821de246",
						},
					}
				);
			})
			.then((res) => {
				console.log(res.data);
				const author = res.data;
				this.setState({ author });
			});
	}

	render() {
		return (
			<div>
				<Navbar />
				<div className="pt-4 pb-5 bg-color">
					<div className="container">
						<div className="ui two column grid">
							<div className="twelve wide column">
								<div className="challenges">
									<div className="section-title">
										<h2>Practice</h2>
									</div>
									<div className="ui card w-100">
										<div className="content">
											<div className="header">{this.state.data.title}</div>
											<div className="meta">2 days ago</div>
											<div className="description">
												<p>{this.state.data.body}</p>
											</div>
										</div>
										<div className="extra content">
											<i className="check icon"></i>
											Contributed by &nbsp;
											{this.state.author.first_name +
												" " +
												this.state.author.last_name}
										</div>
									</div>
								</div>
							</div>
							<div className="four wide column mt-5">
								{/* <AdOne /> */}
								<Sidebar />
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}