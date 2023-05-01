using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
  public class Details
  {
    public class Query : IRequest<Activity>
    {
      public Guid Id { get; set; }
    }

    public class Handler : IRequestHandler<Query, Activity>
    {
      private readonly DataContext _context;
      public Handler(DataContext context)
      {
        _context = context;
      }

      public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
      {
        if (_context.Activities == null) return new Activity { };
        var activity = await _context.Activities.FindAsync(request.Id);
        if (activity == null) return new Activity { };
        return activity;
      }
    }
  }
}