
$(document).ready(function () {
    
    (function AnimateSubHeaders () {
        var subHeads = [
                'Web developer',
                'Programmer',
                'IT Consultant'
            ],
            subHeadIndex = 1;
        $('#subheader').text(subHeads[0]).fadeOut(0).fadeIn(1500);
        setInterval(function () {
            $('#subheader').fadeOut(750, function() {
                $(this).text(subHeads[subHeadIndex]).fadeIn(750);
                subHeadIndex++;
                if (subHeadIndex >= subHeads.length) subHeadIndex = 0;
            });
        }, 4000);
    })();
    
    (function AnimateReferences () {
        var references = [
            { name: 'Ing. Roman Brhel', title: 'Senior developer', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer pellentesque quam vel velit. In sem justo, commodo ut, suscipit at, pharetra vitae, orci.' },
            { name: 'Stephen Mullen, M.Ed.', title: 'Managing director of LAMPA Systems s.r.o.', content: '' },
            { name: 'BcA. Michal Berg', title: 'Co-founder of eSports.cz s.r.o.', content: '' },
            { name: '', title: '', content: '' }
        ];
    })();

});
