import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
  max-width: 80%;
`

const ClassLi = styled.li`
  font-weight: bold;
`

const CompletedClasses = () => {
  return (
    <>
      <Ul>
        <ClassLi>Use of social media and IT in fashion</ClassLi>
        <ul><li>An application and discussion of social media and information technology strategies in fashion.</li></ul>
        <ClassLi>Global Sourcing and Trade in Textile Products</ClassLi>
        <ul><li>Study of international factors affecting the textiles and textile products industries and their impact on the
economy and consumers.</li></ul>
        <ClassLi>Corporate Social Responsibility, Sustainability & Entrepreneurship in Fashion</ClassLi>
        <ul><li>Examination of corporate socially responsible and sustainable decision making and regulatory
processes used in advertising and promoting fashion retail</li></ul>
        <ClassLi>Dress, Culture & Appearance</ClassLi>
        <ul><li>A cross-cultural study of the diversity and meaning of appearance and dress as manifestations of
individual and group behavior, social organization, and cultural norms.</li></ul>
        <ClassLi>Aesthetics of Fashion & Retail</ClassLi>
        <ul><li>The perception and presentation of the self and its surrounding environment through the use of
aesthetics with consideration of foundations of design, physical characteristics, environment,
personal expression, and context.</li></ul>
        <ClassLi>Professional Development</ClassLi>
        <ul><li>Professional career opportunities and goals, job search, professional organizations and continued
development.</li></ul>
        <ClassLi>Fashion Forecasting</ClassLi>
        <ul><li>Analysis and application of trend forecasting practices in all aspects of the fashion industry.</li></ul>
        <ClassLi>Merchandise Buying & Management</ClassLi>
        <ul><li>Retail buyer’s role in merchandise management: decision making, planning, control process, negotiating, buying, pricing, 
and preparing merchandise for sale.</li></ul>
      </Ul>
    </>
  )
}

export default CompletedClasses