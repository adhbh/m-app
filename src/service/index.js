export default class ServiceClient {
	fetchActors() {
		return fetch('http://api.cinemalytics.in/v2/analytics/MaleActorsByHighestRating/?auth_token=')
	}
	fetchActress() {
		return fetch('http://api.cinemalytics.in/v2/analytics/FemaleActorsByHighestRating/?auth_token=')
	}
	fetchActorById(id) {
		return fetch(`http://api.cinemalytics.in/v2/actor/id/${id}/?auth_token=B72EAA9D910F1029359B538A7DA0303C`)
	}
	fetchMovieByActorId(id) {
		return fetch(`http://api.cinemalytics.in/v2/actor/${id}/movies/?limit=36&auth_token=B72EAA9D910F1029359B538A7DA0303C`)
	}
	fetchMovieById(id) {
		return fetch(`http://api.cinemalytics.in/v2/movie/id/${id}/?auth_token=B72EAA9D910F1029359B538A7DA0303C`)
	}
}