import React from 'react';
import styles from './ProfessionalTimeline.module.css';
import { BtnCta } from '../BtnCta';

const TimelineComponents = () => (
  <div className={styles.timelineComponents}>
    <span className={styles.timelineNub}></span>
    <span className={styles.timelineTrack}></span>
  </div>
)

const JobMetadata = ({ job }) => {
  const formatDate = (date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ]

    const monthIndex = date.getMonth()
    const year = date.getFullYear()

    return `${months[monthIndex]} ${year}`
  }

  return (
    <ul className={styles.jobMetadata}>
      <li className={styles.jobStartDate}>{formatDate(job.startDate)}</li>
      <li className={styles.jobName}>{job.name}</li>
      <li className={styles.jobTitle}>{job.title}</li>
    </ul>
  )
}

export const ProfessionalTimeline = () => {
  const timelineData = [
    {
      name: "Maisonette",
      title: "Product Design Manager",
      startDate: new Date('5/2/2021'),
      endDate: new Date('4/1/2023'),
    },
    {
      name: "Walmart+ InHome",
      title: "Senior Product Designer",
      startDate: new Date('9/1/2020'),
      endDate: new Date('5/1/2021'),
    },
    {
      name: "Walmart Text to Shop",
      title: "Senior UX Designer",
      startDate: new Date('2/1/2020'),
      endDate: new Date('9/1/2020'),
    },
    {
      name: "Jetblack",
      title: "Senior UX Designer",
      startDate: new Date('5/1/2018'),
      endDate: new Date('2/1/2020'),
    },
    {
      name: "Freelance",
      title: "Product Designer",
      startDate: new Date('1/1/2016'),
      endDate: new Date('5/1/2018'),
    },
    {
      name: "Crowdtap",
      title: "Senior Product Designer",
      startDate: new Date('12/1/2012'),
      endDate: new Date('10/1/2015'),
    },
    {
      name: "BuddyMedia",
      title: "User Interface Designer",
      startDate: new Date('8/1/2011'),
      endDate: new Date('11/1/2012'),
    },
    {
      name: "Tutorspree",
      title: "UI Designer/Font-end Developer",
      startDate: new Date('5/1/2011'),
      endDate: new Date('8/1/2011'),
    },
    {
      name: "alOt",
      title: "Web Designer",
      startDate: new Date('8/1/2010'),
      endDate: new Date('4/1/2011'),
    },
  ]

  const renderTimelineItems = () => {
    return timelineData.map(item => (
      <li
        key={item.name}
        className={styles.timelineItem}
      >
        <TimelineComponents />
        <JobMetadata job={item} />
      </li>
    ))
  }

  return (
    <div className={styles.professionalTimelineSection}>
      <p>Prior to Maisonette, I worked on a few internally incubated products at Walmart. Before that, mostly startups.</p>
      <ol className={styles.professionalTimeline}>
        { renderTimelineItems() }
      </ol>
      {/* <BtnCta label="More professional work &rarr;" /> */}
    </div>
  )
}
