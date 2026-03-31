import {Link} from 'react-router-dom'

const JobItem = ({jobDetails}) => (
  <li>
    <Link to={`/jobs/${jobDetails.id}`}>
      <img src={jobDetails.company_logo_url} alt="company logo" />
      <h1>{jobDetails.title}</h1>
      <p>{jobDetails.rating}</p>
      <p>{jobDetails.location}</p>
      <p>{jobDetails.employment_type}</p>
      <p>{jobDetails.job_description}</p>
    </Link>
  </li>
)

export default JobItem
