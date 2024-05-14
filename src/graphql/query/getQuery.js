import { gql } from '@apollo/client';

export const GET_COMPANY = gql`
query Query {
  company {
    ceo
    coo
    cto
    cto_propulsion
    employees
    founded
    founder
    launch_sites
    name
    summary
    test_sites
    valuation
    vehicles
    headquarters {
      address
      city
      state
    }
    links {
      elon_twitter
      flickr
      twitter
      website
    }
    
  }
}
`;

// Launches
export const GET_LAUNCHES = gql`
query Query($limit: Int, $offset: Int) {
    launches(limit: $limit, offset: $offset) {
      id
      mission_name
      launch_date_local
    }
  }`;


// Cores
export const GET_CORES = gql`
query Query($limit: Int, $offset: Int) {
  cores(limit: $limit, offset: $offset) {
    id
    status
  }
}`;

// Dragons
export const GET_DRAGONS = gql`
query Query($limit: Int, $offset: Int) {
  dragons(limit: $limit, offset: $offset) {
    id
    name
    wikipedia
    diameter {
      meters
    }
    dry_mass_kg
    dry_mass_lb
  }
}`;

// Ships
export const GET_SHIPS = gql`
query Query($limit: Int, $offset: Int) {
  ships(limit: $limit, offset: $offset) {
    name
    id
    image
    home_port
    year_built
  }
}`;

// Rockets
export const GET_ROCKETS = gql`
query Query($limit: Int, $offset: Int) {
  rockets(limit: $limit, offset: $offset) {
    id
    name
    wikipedia
    company
    country
    cost_per_launch
  }
}`;


// Roadster
export const GET_ROADSTER = gql`
query Query {
  roadster {
    details
    earth_distance_km
    earth_distance_mi
    eccentricity
    epoch_jd
    inclination
    launch_date_unix
    launch_date_utc
    launch_mass_kg
    launch_mass_lbs
    longitude
    mars_distance_km
    mars_distance_mi
    name
    norad_id
    periapsis_arg
    periapsis_au
    period_days
    semi_major_axis_au
    speed_kph
    speed_mph
    wikipedia
    apoapsis_au
  }
}`;


// Launchpads
export const GET_LAUNCHPADS = gql`
query Query($limit: Int, $offset: Int) {
  launchpads(limit: $limit, offset: $offset) {
    id
    name
    wikipedia
    status
  }
}`;


// Histories
export const GET_HISTORIES = gql`
query Query($limit: Int, $offset: Int) {

  histories(limit: $limit, offset: $offset) {
    id
    title
    event_date_unix
    event_date_utc
  }
}`;


// Landpads
export const GET_LANDPADS = gql`
query Query($limit: Int, $offset: Int) {
  landpads(limit: $limit, offset: $offset) {
    id
    full_name
    status
    wikipedia
  }
}`;


// Capsules
export const GET_CAPSULES = gql`
query Query($limit: Int, $offset: Int) {
  capsules(limit: $limit, offset: $offset) {
    id
    reuse_count
    status
    type
  }
}`;


