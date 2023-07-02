export interface DashboardProps {
    visitors: number;
    projects: number;
    followers: number;
}

export function Dashboard({followers,projects,visitors}:DashboardProps) {  
    return (
      <div className="py-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-base-200 shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold mb-2">Dashboard Analytics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white text-gray-700 px-4 py-6 border border-gray-300 rounded">
                  <h3 className="text-2xl font-bold mb-2">{visitors}</h3>
                  <p className="text-gray-600">Visitors</p>
                </div>
                <div className="bg-white text-gray-700 px-4 py-6 border border-gray-300 rounded">
                  <h3 className="text-2xl font-bold mb-2">{projects}</h3>
                  <p className="text-gray-600">Projects</p>
                </div>
                <div className="bg-white text-gray-700 px-4 py-6 border border-gray-300 rounded">
                  <h3 className="text-2xl font-bold mb-2">{followers}</h3>
                  <p className="text-gray-600">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  