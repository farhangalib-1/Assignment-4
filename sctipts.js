const job1 = document.getElementById('notapplied1');
const job2 = document.getElementById('notapplied2');
const job3 = document.getElementById('notapplied3');
const job4 = document.getElementById('notapplied4');
const job5 = document.getElementById('notapplied5');
const job6 = document.getElementById('notapplied6');
const job7 = document.getElementById('notapplied7');
const job8 = document.getElementById('notapplied8');
const allJobs = document.getElementById('allbtn')
const interview = document.getElementById('interviewbtn')
const rejected = document.getElementById('rejectedbtn')
const mainContent = document.getElementById('maincontents')
const noJob = document.getElementById('nojob')
const allJobsCircular = document.getElementById('alljobcirculars')

allJobs.addEventListener('click', function(){
    allJobs.style.backgroundColor = '#3B82F6';
    allJobs.style.color = 'white';
    interview.style.backgroundColor = 'white';
    interview.style.color = '#64748B';
    rejected.style.backgroundColor = 'white';
    rejected.style.color = '#64748B';
    noJob.classList.add('hidden')
    allJobsCircular.classList.remove('hidden')
    
})
interview.addEventListener('click', function(){
    interview.style.backgroundColor = '#3B82F6';
    interview.style.color = 'white';
    allJobs.style.backgroundColor = 'white';
    allJobs.style.color = '#64748B';
    rejected.style.backgroundColor = 'white';
    rejected.style.color = '#64748B';
    allJobsCircular.classList.add('hidden')
    noJob.classList.remove('hidden')
    allJobsCircular.classList.add('alljobcirculars')
})
rejected.addEventListener('click', function(){
    rejected.style.backgroundColor = '#3B82F6' ;
    rejected.style.color = 'white'
    interview.style.backgroundColor = 'white';
    interview.style.color = '#64748B';
    allJobs.style.backgroundColor = 'white';
    allJobs.style.color = '#64748B';
})

job1.addEventListener('click' , function(){
    job1.innerText = 'Applied'
    
})
job2.addEventListener('click' , function(){
    job2.innerText = 'Applied'

    
})
job3.addEventListener('click' , function(){
    job3.innerText = 'Applied'
    
})
job4.addEventListener('click' , function(){
    job4.innerText = 'Applied'
    
})
job5.addEventListener('click' , function(){
    job5.innerText = 'Applied'
    
})
job6.addEventListener('click' , function(){
    job6.innerText = 'Applied'
    
})
job7.addEventListener('click' , function(){
    job7.innerText = 'Applied'
    
})

job8.addEventListener('click' , function(){
   job8.innerText = 'Applied'
    
})