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

const interviewClick1 = document.getElementById('interview1')
const rejectedClick1 = document.getElementById('rejected1')  
const interviewClick2 = document.getElementById('interview2')
const rejectedClick2 = document.getElementById('rejected2')  
const interviewClick3 = document.getElementById('interview3')
const rejectedClick3 = document.getElementById('rejected3')  
const interviewClick4 = document.getElementById('interview4')
const rejectedClick4 = document.getElementById('rejected4')  
const interviewClick5 = document.getElementById('interview5')
const rejectedClick5 = document.getElementById('rejected5') 
const interviewClick6 = document.getElementById('interview6')
const rejectedClick6 = document.getElementById('rejected6') 
const interviewClick7 = document.getElementById('interview7')
const rejectedClick7 = document.getElementById('rejected7') 
const interviewClick8 = document.getElementById('interview8')
const rejectedClick8 = document.getElementById('rejected8') 


interviewClick1.addEventListener('click' , function(){
    job1.innerText = 'Interview'
    job1.style.backgroundColor = '#10B981';
    job1.style.color = 'white'
    job1.style.border = 'none'
})
rejectedClick1.addEventListener('click', function(){
    job1.innerText = 'Rejected'
    job1.style.backgroundColor = '#EF4444';
    job1.style.color = 'white'
    job1.style.border = 'none'
})
interviewClick2.addEventListener('click' , function(){
    job2.innerText = 'Interview'
    job2.style.backgroundColor = '#10B981';
    job2.style.color = 'white'
    job2.style.border = 'none'
})
rejectedClick2.addEventListener('click', function(){
    job2.innerText = 'Rejected'
    job2.style.backgroundColor = '#EF4444';
    job2.style.color = 'white'
    job2.style.border = 'none'
})
interviewClick3.addEventListener('click' , function(){
    job3.innerText = 'Interview'
    job3.style.backgroundColor = '#10B981';
    job3.style.color = 'white'
    job3.style.border = 'none'
})
rejectedClick3.addEventListener('click', function(){
    job3.innerText = 'Rejected'
    job3.style.backgroundColor = '#EF4444';
    job3.style.color = 'white'
    job3.style.border = 'none'
})
interviewClick4.addEventListener('click' , function(){
    job4.innerText = 'Interview'
    job4.style.backgroundColor = '#10B981';
    job4.style.color = 'white'
    job4.style.border = 'none'
})
rejectedClick4.addEventListener('click', function(){
    job4.innerText = 'Rejected'
    job4.style.backgroundColor = '#EF4444';
    job4.style.color = 'white'
    job4.style.border = 'none'
})
interviewClick5.addEventListener('click' , function(){
    job5.innerText = 'Interview'
    job5.style.backgroundColor = '#10B981';
    job5.style.color = 'white'
    job5.style.border = 'none'
})
rejectedClick5.addEventListener('click', function(){
    job5.innerText = 'Rejected'
    job5.style.backgroundColor = '#EF4444';
    job5.style.color = 'white'
    job5.style.border = 'none'
})
interviewClick6.addEventListener('click' , function(){
    job6.innerText = 'Interview'
    job6.style.backgroundColor = '#10B981';
    job6.style.color = 'white'
    job6.style.border = 'none'
})
rejectedClick6.addEventListener('click', function(){
    job6.innerText = 'Rejected'
    job6.style.backgroundColor = '#EF4444';
    job6.style.color = 'white'
    job6.style.border = 'none'
})
interviewClick7.addEventListener('click' , function(){
    job7.innerText = 'Interview'
    job7.style.backgroundColor = '#10B981';
    job7.style.color = 'white'
    job7.style.border = 'none'
})
rejectedClick7.addEventListener('click', function(){
    job7.innerText = 'Rejected'
    job7.style.backgroundColor = '#EF4444';
    job7.style.color = 'white'
    job7.style.border = 'none'
})
interviewClick8.addEventListener('click' , function(){
    job8.innerText = 'Interview'
    job8.style.backgroundColor = '#10B981';
    job8.style.color = 'white'
    job8.style.border = 'none'
})
rejectedClick8.addEventListener('click', function(){
    job8.innerText = 'Rejected'
    job8.style.backgroundColor = '#EF4444';
    job8.style.color = 'white'
    job8.style.border = 'none'
})



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

