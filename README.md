# Project REST-Rant

| Method | Path                      | Purpose                                          |
| ------ | ------------------------- | ------------------------------------------------ |
| GET    | `/`                       | The home page                                    |
| GET    | `/places`                 | Places Index Page                                |
| POST   | `/places`                 | Create new place                                 |
| GET    | `/places/new              | Form page for creating a new place               |
| GET    | `/places/:id              | Details about a particular place                 |
| PUT    | `/places/:id              | Update a particular place                        |
| GET    | `/places/:id/edit         | Form page for editing an existing place          |
| DELETE | `/places/:id              | Delete a particular place                        |
| POST   | `/places/:id/rant         | Create a rant(comment) about a particular place  |
| DELETE | `/places/:id/rant/:rantld | Delete a rant (comment) about a particular place |
| GET    | \*                        | 404 page (matches any route not defined above)   |

\*\*places(restaurants)
'Name', 'City', 'State', 'Cuisines', 'Pic'

\*\*reviews(rants)

REST-Rant is an app where users can review restaurants.

### User Stories

### Wireframes

"User stories are most often phrased as:"As a (user type) I need (feature) so I can (action)"
